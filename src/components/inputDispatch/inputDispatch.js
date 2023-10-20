export const inputDispatch = (dispatch, e) => {
    switch (e.target.type) {
        case "checkbox":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.checked
            })
            break;
        case "text":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "email":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "password":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "file":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "hidden":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "number":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "radio":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        case "select-one":
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
        default:
            dispatch({
                type: "input",
                field: e.target.name,
                payload: e.target.value
            })
            break;
    }
}