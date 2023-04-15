const Form_registration = () => {

    return (
        <div id="login_div" class="container d-flex align-items-center justify-content-center">
        <form action="/login/" method="POST">
            <div class="mb-3">
              <label for="InputFirstName" class="form-label">First Name</label>
              <input type="text" class="form-control" name="firstname" id="InputFirstName" />
              <div id="firstnameHelp" class="form-text">Fill first name</div>
            </div>
            <div class="mb-3">
              <label for="InputLastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" name="lastname" id="InputLastName" />
              <div id="lastnameHelp" class="form-text">Fill last name</div>
            </div>
            <div class="mb-3">
              <label for="InputContact" class="form-label">Contact Number</label>
              <input type="number" class="form-control" name="contactnumber" id="InputContactNumber" />
              <div id="contactnumberHelp" class="form-text">Fill contact number</div>
            </div>
            <div class="mb-3">
              <label for="InputDateOfBirth" class="form-label">Date of Birth</label>
              <input type="text" class="form-control" name="dateofbirth" id="InputDateOfBirth" />
              <div id="dateofbirthHelp" class="form-text">Fill date of birth</div>
            </div>
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
    export default Form_registration