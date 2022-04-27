const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./components/**/*.js', './pages/**/*.js'],
    whitelist: ['body', 'html'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  }
]

module.exports = {
  plugins: ['postcss-import', 'tailwindcss', 'autoprefixer']
}
