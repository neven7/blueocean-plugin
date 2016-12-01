import React, { PropTypes } from 'react';
import StepStatus from './FlowStepStatus';

/**
 * Used to create a multi-step workflow with one or more FlowStep children.
 * Handles navigating forward through the flow and updating the state of each step.
 */
export default class MultiStepFlow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };
    }

    render() {
        return (
            <div className="multi-step-flow-component">
                { React.Children.map(this.props.children, (child, index) => {
                    const { currentIndex } = this.state;
                    let status = StepStatus.INCOMPLETE;

                    if (index < currentIndex) {
                        status = StepStatus.COMPLETE;
                    } else if (index === currentIndex) {
                        status = StepStatus.ACTIVE;
                    }

                    const isLastStep = index === this.props.children.length - 1;

                    const extraProps = {
                        status,
                        isLastStep,
                    };

                    return React.cloneElement(child, extraProps);
                })}
            </div>
        );
    }
}

MultiStepFlow.propTypes = {
    children: PropTypes.node,
    onCompleteFlow: PropTypes.func,
};
