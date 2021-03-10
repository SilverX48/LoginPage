import NavBarItems from "./NavBarItems"

function NavBar() {
    let dummyData = [
      { label: "Home", uri: "#home" },
      { label: "Todo's", uri: "/todos" },
      { label: "Login", uri: "/login" },
    ];
    let navBarItems = dummyData.map((o, i)=>{
      return (
              <NavBarItems
                label={o.label}
                uri={o.uri}
                key={i}>
              </NavBarItems>
            );
    });
    return (
      <nav>
        <ul>
          {navBarItems}
        </ul>
      </nav>
    );
  }

export default NavBar;