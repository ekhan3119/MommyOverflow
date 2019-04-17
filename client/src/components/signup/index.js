import React from "react";
import "./style.css";

function signUp (props) {
    return(
        <div class = "columns">
            <div class="column"></div>
                <div class = "column">
                    <h2 class="title is-2">New User Signup</h2>
                    <div class="field">
                        <label class="label">Name</label>
                    <div class="control">
                        <input class="input is-black" type="text" placeholder="Text input">
                    </div>
                    </div>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-black" type="text" placeholder="Text input" value="bulma">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Email</label>
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-black" type="email" placeholder="Email input" value="hello@">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>
                
                <div class="field">
                  <div class="field">
                    <label class="label">Password</label>
                      <p class="control has-icons-left">
                        <input class="input is-black" type="password" placeholder="Password">
                        <span class="icon is-small is-left">
                          <i class="fas fa-lock"></i>
                        </span>
                      </p>
                  </div>
                  <div class="file">
                  <label class="label">Upload Image      </label></br>
                  <label class="file-label">
                    <input class="file-input" type="file" name="resume">
                      <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                      </span>
                  </label>
                </div>
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">I agree to the <a href="#">terms and conditions</a>
                  </label>
                </div>
                </div>
                <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                  <button class="button is-text">Cancel</button>
                </div>
                </div>
            </div>
          <div class="column"></div>
        </div></br></br></br></br></br> 

    )
}