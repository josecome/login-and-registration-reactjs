//import { useState, useEffect } from 'react';

const Form = () => {

    return (
        <div id="login_div" class="container d-flex align-items-center justify-content-center">
            <form action="/login/" method="POST">
                <div class="mb-3">
                    <label for="InputEmail1" class="form-label">Email address</label>
                    <input type="text" class="form-control" name="username" id="InputEmail1" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="InputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="InputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="Check1" />
                    <label class="form-check-label" for="Check1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default Form
