import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'iOS >= 15',
        'Safari >= 15',
        'not dead'
      ]
    })
  ]
}