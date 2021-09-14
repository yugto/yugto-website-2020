const defaults = {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
}

const formatDate = (string, options = {}) => {
  return new Intl.DateTimeFormat('en', 
    { 
      ...defaults,
      ...options
    }
  ).format(new Date(string))
}

export default formatDate
