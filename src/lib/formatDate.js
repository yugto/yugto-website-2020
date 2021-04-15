const formatDate = (string) => {
  return new Intl.DateTimeFormat('en', 
    { 
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  ).format(new Date(string))
}

export default formatDate
