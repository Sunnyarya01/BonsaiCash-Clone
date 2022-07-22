let navbar = ()=>{
    return `
    <div class="navbar">
    <div class="logo">
      <a href="index.html"><img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt="logo"/></a>
    </div>
    <nav>
      <ul>
        <li>
          <a href="#">Product <i class="fa-solid fa-chevron-down"></i></a>
          <div class="dropdown1">
            <div class="productDropdown">
                <a href="#">
                    <h2>Bonsai Workflow</h2>
                    <p>Look professional, win more clients and manage your business from one place</p>
                </a>
            </div>
            <hr>
            <div class="productDropdown">
                <a href="bonsaiTax.html">
                    <h2>Bonsai Tax</h2>
                    <p>Track expenses, maximize tax write-offs, and estimate taxes without the headache</p>                       
                </a>
            </div>
            <hr>
            <div class="productDropdown">
                <a href="bonsaiCash.html">
                    <h2>Bonsai Cash</h2>
                    <p>Bonsai's all-in-one financial hub: No fees and lightning fast payouts</p>
                </a>
            </div>
          </div>
        </li>
        <li>
          <a href="#">Templates <i class="fa-solid fa-chevron-down"></i></a>
          <div class="dropdown2">
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="">
                    <h3>Contract Templates</h3>
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="">
                    <h3>Proposal Templates</h3>
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg" alt="">
                    <h3>Invoice Templates</h3>
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg" alt="">
                    <h3>Agreement Templates</h3>
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="">
                    <h3>Quote Templates</h3>
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg" alt="">
                    <h3>Scope of Work Templates</h3>                        
                </a>
            </div>
            <div class="templatesDropdown">
                <a href="#">
                    <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg" alt="">
                    <h3>Brief Templates</h3>
                </a>
            </div>
          </div>
        </li>
        <li><a href="#">Pricing</a></li>
        <li><a href="bonsaiReviews.html">Reviews</a></li>
        <button class="btn1"><a href="login.html">LOG IN</a></button>
        <button class="btn2"><a href="signup.html">START FREE</a></button>
      </ul>
    </nav>
  </div>`

}

export default navbar;