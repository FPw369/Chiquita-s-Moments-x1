import { createRequire } from 'module';

const isWindows = process.platform === 'win32';

if (isWindows) {
  const require = createRequire(import.meta.url);
  const fs = require('fs');

  const toEinval = (path) =>
    Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
      code: 'EINVAL',
      errno: -4071,
      syscall: 'readlink',
      path,
    });

  if (fs.promises && typeof fs.promises.readlink === 'function') {
    const origPromisesReadlink = fs.promises.readlink.bind(fs.promises);
    fs.promises.readlink = async function (path, options) {
      try {
        return await origPromisesReadlink(path, options);
      } catch (err) {
        if (err && err.code === 'EISDIR') {
          throw toEinval(path);
        }
        throw err;
      }
    };
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  webpack: (config) => {
    if (!isWindows) {
      return config;
    }

    config.resolve.symlinks = false;
    config.cache = false;

    const toEinval = (path) =>
      Object.assign(new Error(`EINVAL: invalid argument, readlink '${path}'`), {
        code: 'EINVAL',
        errno: -4071,
        syscall: 'readlink',
        path,
      });

    config.plugins.push({
      apply(compiler) {
        const wrapReadlink = (orig) => {
          if (typeof orig !== 'function') return orig;
          return function (path, options, callback) {
            if (typeof options === 'function') {
              callback = options;
              options = undefined;
            }
            return orig.call(this, path, options, (err, res) => {
              if (err && err.code === 'EISDIR') {
                return callback(toEinval(path));
              }
              return callback(err, res);
            });
          };
        };

        const patchIfs = (comp) => {
          const ifs = comp.inputFileSystem;
          if (ifs) {
            if (ifs.readlink) ifs.readlink = wrapReadlink(ifs.readlink);
            if (ifs.fileSystem && ifs.fileSystem.readlink) {
              ifs.fileSystem.readlink = wrapReadlink(ifs.fileSystem.readlink);
            }
            if (ifs._readlinkBackend && ifs._readlinkBackend.provide) {
              ifs._readlinkBackend.provide = wrapReadlink(ifs._readlinkBackend.provide);
            }
          }
        };

        compiler.hooks.beforeRun.tap('ExfatReadlinkFix', patchIfs);
        compiler.hooks.watchRun.tap('ExfatReadlinkFix', patchIfs);
      },
    });

    return config;
  },
};

export default nextConfig;
