import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'

const MainSection = ({ todosCount }) =>
  (
    <section className="main">
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          activeCount={todosCount}
        />
      }
    </section>
  )

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
}

export default MainSection;