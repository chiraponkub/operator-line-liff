import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

extend("required", {
    ...rules.required,
    message: "Please specify {_field_}"
})
extend("username", {
    ...rules.required,
    message: "Please specify {_field_}"
})

extend("password", {
    ...rules.required,
    message: "Please specify {_field_}"
})

extend("confrimed", {
    ...rules.confirmed,
    message: "Please enter the same password"
})

extend('regex-username', (value) => {
    if (value.match('^[a-zA-Z-_\u0E00-\u0E7F]+$') !== null) {
        return true
    }
    return (
        "Please specify English or Thai characters"
    )
})
extend("regex-password", (value) => {
    // if (value.match(`.{6,20}`) !== null) {
    //     return true
    // }
    // return 'Please enter a valid password' + ' ' + 'At least six characters long'
    if (value.match(`.{6,}`) !== null) {
        return true
    }
    return 'Please enter a valid password' + ' ' + 'must not be less than 6 characters and no more than 20 characters.'
})

extend('tel', (value) => {
    if (value.match(`^[0-9]{9,10}$`) !== null) {
        return true
    }
    return 'Enter your phone number correctly' + ' ' + 'At least nine characters long'
})


Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)