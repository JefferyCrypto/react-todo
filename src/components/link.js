

const Link = ({active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  }

  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a
    onClick={e => {
      e.preventDefault()
      onClick()
    }}
    >
    {children}
  </a>
}

export default Link