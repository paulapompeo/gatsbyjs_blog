import React from 'react';
import propTypes from 'prop-types'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import * as S from './styled'

const Pagination = ({isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        {!isFirst && <AniLink to={prevPage} cover direction="left" duration={0.6} bg="var(--background)">← página anterior</AniLink>}
        
        <p>{currentPage} de {numPages}</p>

        {!isLast && <AniLink to={nextPage} cover direction="right" duration={0.6} bg="var(--background)">próxima página →</AniLink>}
    </S.PaginationWrapper>

)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
}

export default Pagination