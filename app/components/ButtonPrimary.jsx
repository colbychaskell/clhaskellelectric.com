const ButtonPrimary = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button >
  )
}

export default ButtonPrimary
