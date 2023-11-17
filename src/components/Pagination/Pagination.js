import React from "react";
import { Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

import { StyledPagination } from "./index-styles"

const DefaultPagination = ({
    activePage,
    totalPages,
    onPageChange,
    boundaryRange,
    siblingRange,
    ellipsisItem,
    firstItem,
    lastItem,
    prevItem,
    nextItem
}) => {
    return (
        <StyledPagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            boundaryRange={boundaryRange}
            siblingRange={siblingRange}
            ellipsisItem={ellipsisItem}
            firstItem={firstItem}
            lastItem={lastItem}
            prevItem={prevItem}
            nextItem={nextItem}
        />
    );
}

DefaultPagination.defaultProps = {
    boundaryRange: 0,
    siblingRange: 3,
    ellipsisItem: false,
    firstItem: {
        content: <Icon name="angle double left" />,
        icon: true
    },
    lastItem: {
        content: <Icon name="angle double right" />,
        icon: true
    },
    prevItem: {
        content: <Icon name="angle left" />,
        icon: true
    },
    nextItem: {
        content: <Icon name="angle right" />,
        icon: true
    }
}

DefaultPagination.propTypes = {
    activePage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}

export { DefaultPagination };
