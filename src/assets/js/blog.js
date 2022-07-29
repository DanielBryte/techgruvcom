function Navbar (){
    return(
    <header id="header">
        <div className="container d-flex align-items-center justify-content-between">
            <div className="logo ms-lg-0">
                <h1>
                    <img src="assets/img/logo.png" alt="logo"/>
                    <a href="index.html">Gruv Blog</a>
                </h1>
            </div>
        
            <nav id="navbar" class="navbar"/>
                <div className="wrap">
                    <div className="search">
                    <input type="text" className="searchTerm" placeholder="Search around the blog..."/>
                    <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="container soon">
        <div className="row">
        <div className="col-md-12 align-items-center justify-content-center">
        <img src="assets/img/blog-coming-soon (1).png" alt=""/>
        </div>
        <div className="col-md-12 mt-4"><a href="index.html">Go Home</a></div>
        </div>
    </div>
    </header>

    )
}


ReactDOM.render(
    <body>
        <navbar />
    </ body>,

    document.getElementById("header")
)
