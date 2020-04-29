module.exports = config => {
  config.addPairedShortcode('alert', function (content, options = {}) {
    const VARIANTS = ['primary', 'secondary', 'success', 'danger'];
    const {
      label = 'Note', variant = 'primary'
    } = options;
    if (!VARIANTS.includes(variant)) {
      throw new Error(`${variant} is not supported. Try [${VARIANTS.join(', ')}]`)
    }
    return `<div class="alert alert-${variant}" role="alert"><strong>${label}:</strong> ${content}</div>`;
  })
}
