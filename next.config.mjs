/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'i.imgur.com',
      'images.blz-contentstack.com',
      'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
      'c4.wallpaperflare.com',
      'www.charlieintel.com',
      'images5.alphacoders.com',
      'img1.reactor.cc',
      'cdnb.artstation.com',
      'images.gog-statics.com',
      'img10.reactor.cc',
      'www.pcgamesn.com',
      'www.dexerto.com',
      'static.wikia.nocookie.net',
      'masterpiecer-images.s3.yandex.net',
      'i.ytimg.com',
      'platform.polygon.com',
      'steamuserimages-a.akamaihd.net',
      'image7.uhdpaper.com',
      'wallpapertag.com',
      'www.archives.gov',
      'www.kakuchopurei.com',
      'www.pockettactics.com',
      'static1.srcdn.com',
      '64.media.tumblr.com',
      'preview.redd.it',
      'cdn.donmai.us',
      'i.redd.it',
      'img.goodfon.com',
      'www.wallpaperflare.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'videos/',
        },
      },
    })
    return config
  },
}
export default nextConfig
