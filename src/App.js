import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "./containers/Landing/Landing";
import SignUpForm from "./containers/Signup/SignUpForm";
import Success from "./containers/Signup/success";
import OrderSuccess from "./containers/Orders/OrderSuccess";
import LogInForm from "./containers/Login/LogInForm";
import { Home } from "./containers/Home/home";
import Logout from "./containers/Logout/Logout";
import { NotFound } from "./containers/NotFound/NotFound";
import { Layout } from "./components/Layout";
import { TopNavbar } from "./components/TopNavbar";
import { Jumbotron } from "./components/Jumbotron";
import Find from "./containers/Find/Find";
import OrderForm from "./containers/Orders/OrderForm";
import OrderHistory from "./containers/Orders/OrderHistory";
import ProjectsList from "./containers/Projects/ProjectsList";
import Projects from "./containers/Projects/Projects";
import ProjectEdit from "./containers/Projects/ProjectEdit";
import GradeForm from "./containers/Orders/GradeForm";
import OrderEdit from "./containers/Orders/OrderEdit";
import OrderUpdated from "./containers/Orders/OrderUpdated";
import UserUpdated from "./containers/Users/UserUpdated";
import User from "./containers/Users/User";
import UserEdit from "./containers/Users/UserEdit";
import Favorites from "./containers/Favorites/Favorites";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      logged_in: false,
      user: null,
      grade: null,
      projects: null,
      clickedProject: null,
      projectBeingEdit: null,
      projectBeingEditListingID: null,
      projectBeingEditListing: null,
      userProjects: null,
      userListings: null,
      allListings: null,
      allFavs: null,
      userFavs: null,
      clickedDefenderListing: null,
      clickedOrder: null,
      orderBeingEdit: null,
      orderBeingEditListingID: null,
      orderBeingEditListing: null
    };
  }
  setUserState = newUser => {
    this.setState({
      logged_in: true,
      user: newUser,
    });
  };


  setUserProjectState = newUserProjects => {
    this.setState({
      newProjects: newUserProjects
    });
  };
  setUserListingState = newUserListings => {
    this.setState({
      userListings: newUserListings
    });
  };

  setAllListings = data => {
    this.setState({ allListings: data });
  };

  setAllFavs = data => {
    this.setState({ allFavs: data });
  };

  setUserFavsState = newUserFavs => {
    this.setState({
      userFavs: newUserFavs
    });
  };

  logOutUser = user => {
    localStorage.removeItem("user_id");
  };

  setClickedDefenderListing = listing => {
    this.setState({
      clickedDefenderListing: listing
    });
  };

  setClickedProject = project_id => {
    this.setState({
      clickedProject: project_id
    });
    this.setProjectBeingEdit(project_id);
  };

  setProjectBeingEdit(project_id) {
    this.state.projects.forEach(project => {
      if (project.id === project_id) {
        this.setState({
          projectBeingEdit: project,
          projectBeingEditListingID: project.listing_id
        });
        this.setProjectBeingEditListing(project.listing_id);
      }
    });
  }

  setProjectBeingEditListing(listing_id) {
    this.state.allListings.forEach(listing => {
      if (listing.id === listing_id) {
        this.setState({
          projectBeingEditListing: listing
        });
      }
    });
  }


  updateUserOrdersState = updatedOrder => {
    this.state.userOrders.forEach(order => {
      if (order.id === updatedOrder.id) {
        this.setState({
          userOrders: this.state.userOrders.filter(
            order => order.id !== updatedOrder.id
          )
        });
        this.setState({
          userOrders: [...this.state.userOrders, updatedOrder]
        });
      }
    });
  };

  updateProjectsState = updatedProject => {
    this.state.projects.forEach(project => {
      if (project.id === updatedProject.id) {
        this.setState({
          projects: this.state.projects.filter(
            project => project.id !== updatedProject.id
          )
        });
        this.setState({
          projects: [...this.state.projects, updatedProject]
        });
      }
    });
  };

  updateUserState = updatedUser => {
    this.setState({
      user: updatedUser
    });
  };

  addNewOrderToState = newOrder => {
    this.setState({
      userOrders: [...this.state.userOrders, newOrder]
    });
  };

  updateUserBalance = newBalance => {
    this.setState({
      userBalance: newBalance
    });
  };

  removeFav = Delfav => {
    this.setState({
      userFavs: this.state.userFavs.filter(fav => fav !== Delfav)
    });
  };

  addFav = listing => {
    let fav = {
      id: this.state.userFavs.length + 1,
      listing_id: listing.id,
      lst_price: listing.price,
      created_at: Date().substr(0, 15),
      lst_max_hold: listing.max_hold,
      lst_f_name: listing.user.f_name,
      lst_l_name: listing.user.l_name,
      lst_email: listing.user.email,
      lst_address: listing.user.address,
      lst_rating: listing.user.rating,
      lst_pic_link: listing.user.pic_link
    };
    this.setState({
      userFavs: [...this.state.userFavs, fav]
    });
  };

  render() {
    console.log("app's state: ", this.state);
    return (
      <React.Fragment>
        <Router>
          <TopNavbar appState={this.state} logOutUser={this.logOutUser} />
          <Jumbotron />

          <Layout>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/users/new" component={SignUpForm} />
              <Route exact path="/order/updated" component={OrderUpdated} />
              <Route exact path="/user/updated" component={UserUpdated} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orders/success" component={OrderSuccess} />
              <Route exact path="/users/login">
                <LogInForm
                  setUserState={this.setUserState}
                  setUserOrderState={this.setUserOrderState}
                  setUserListingState={this.setUserListingState}
                  setUserFavsState={this.setUserFavsState}
                  setAllListings={this.setAllListings}
                  setUserBsalanceState={this.setUserBalanceState}
                  setAllFavs={this.setAllFavs}
                />
              </Route>
              {this.state.logged_in && (
                <Route exact path="/users/home">
                  <Home
                    userState={this.state}
                    updateUserFavListingState={this.updateUserFavListingState}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/orders/history">
                  <OrderHistory
                    userOrders={this.state.userOrders}
                    setClickedOrder={this.setClickedOrder}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/order/edit">
                  <OrderEdit
                    appState={this.state}
                    updateUserOrdersState={this.updateUserOrdersState}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/projects">
                  <Projects/>
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/project/edit">
                  <OrderEdit
                    appState={this.state}
                    updateProjectsState={this.updateProjectsState}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/user/account/edit">
                  <UserEdit />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/find">
                  <Find
                    allListings={this.state.allListings}
                    setClickedDefenderListing={this.setClickedDefenderListing}
                    addFav={this.addFav}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/grades">
                  <OrderHistory
                    userOrders={this.state.userOrders}
                    setClickedOrder={this.setClickedOrder}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/grades/create">
                  <GradeForm
                    userOrders={this.state.userOrders}
                    setClickedOrder={this.setClickedOrder}
                  />
                </Route>
              )}
              {this.state.logged_in && (
                <Route exact path="/user/account">
                  <User
                    appState={this.state}
                    updateUserState={this.updateUserState}
                  />
                </Route>
              )}

              <Route exact path="/order">
                <OrderForm
                  appState={this.state}
                  addNewOrderToState={this.addNewOrderToState}
                  updateUserBalance={this.updateUserBalance}
                />
              </Route>

              {this.state.logged_in && (
                <Route exact path="/users/favorites">
                  <Favorites appState={this.state} removeFav={this.removeFav} />
                </Route>
              )}

              <Route exact path="/logout" component={Logout} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
