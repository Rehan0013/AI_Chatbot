import { createContext, useEffect, useRef, useCallback, useMemo, useState } from "react";
import PropTypes from "prop-types";
import Snackbar from "../components/Snackbar";

const intialCtxValue = {
    Snackbar: {
        open: false,
        message: "",
        type: "info",
    },
    showSnackbar: ({message, type = 'info', timeOut = 5000}) => {},
    hideSnackBar: () => {},
};

export const SnackbarContext = createContext(intialCtxValue);

const SnackbarProvider = ({ children }) => {

    const [snackbar, setSnackbar] = useState(
        {
            open: false,
            message: "",
            type: "info",
        }
    ); 

    const timeoutRef = useRef(null);

    const showSnackbar = useCallback(({message, type = 'info', timeOut = 5000}) => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);

        setSnackbar({
            open: true,
            message,
            type,
        });

        timeoutRef.current = setTimeout(() => {
            setSnackbar((prev) => {
                return {
                    ...prev,
                    open: false,
                }
            });
        }, timeOut);
    },[]);

    const hideSnackBar = useCallback(() => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);

        setSnackbar({ open: false, message: "", type: "info" });


    },[]);

    const contextValue = useMemo(() => {
        return {
            showSnackbar, 
            hideSnackBar,
        };
    },[showSnackbar, hideSnackBar]);

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            <Snackbar snackbar={snackbar} />
        </SnackbarContext.Provider>
    );
};

SnackbarProvider.propTypes = {
    children: PropTypes.any,
};

export default SnackbarProvider;