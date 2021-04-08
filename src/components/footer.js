import FilterLink from './filter-link'

const Footer = ({}) => (
  <p>
    <FilterLink filter="SHOW_ALL">
        Show All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Show Completed
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_NOT_COMPLETED">
      Show Not Completed
    </FilterLink>
  </p>
)

export default Footer
