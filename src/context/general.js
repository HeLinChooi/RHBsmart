import { createContext, useContext, useReducer } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// The Soft UI Dashboard PRO Material main context
const GeneralContext = createContext();

// Material Dashboard 2 PRO React reducer
function reducer(state, action) {
    switch (action.type) {
        case "SUBMIT_RISK_ASSESSMENT": {
            return { ...state, riskAssessmentDone: true };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

// Material Dashboard 2 PRO React context provider
function GeneralContextControllerProvider({ children }) {
    const initialState = {
        riskAssessmentDone: false
    };

    const [controller, dispatch] = useReducer(reducer, initialState);

    return <GeneralContext.Provider value={[controller, dispatch]}>{children}</GeneralContext.Provider>;
}

// Material Dashboard 2 PRO React custom hook for using context
function useGeneralContextController() {
    const context = useContext(GeneralContext);

    if (!context) {
        throw new Error(
            "useGeneralContextController should be used inside the GeneralContextControllerProvider."
        );
    }

    return context;
}

// Typechecking props for the GeneralContextControllerProvider
GeneralContextControllerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// Context module functions
const submitRiskAssessment = (dispatch, value) => dispatch({ type: "SUBMIT_RISK_ASSESSMENT", value });

export {
    GeneralContextControllerProvider,
    useGeneralContextController,
    submitRiskAssessment
};
