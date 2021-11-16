import React, { useEffect } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import assets from "../../assets/assets";
import menues from '../../navigation/SidebarConfig'
import { useMediaQuery } from 'react-responsive'
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import appActions from "../../redux/action/app.action";

let changed = false
let changedDesktop = false


const Sidebar = () => {
  
    const history = useHistory()
    const {navbar, collapse} = useSelector(store => store.app)
    const dispatch = useDispatch()

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 960px)' })

    useEffect(() => {
      if(isTabletOrMobile) {
        if(!changed) {
          dispatch(appActions.setNavbarOpen(true))
          dispatch(appActions.setCollapse(true))
          changed = true
          changedDesktop = false
        }
      }
      else {
        if(!changedDesktop) {
          dispatch(appActions.setNavbarOpen(false))
          dispatch(appActions.setCollapse(false))
          changedDesktop = true
          changed = false
        }
      }
    }, [isTabletOrMobile])

  const handleToggleSidebar = () => {
    dispatch(appActions.toggleNavbar())
  }

  const handleClick = (menue) => {
    history.push(`/${menue.path}`)
    handleToggleSidebar()
  }


  return (
    <>
      <div id="header">
        <ProSidebar toggled={navbar} onToggle={handleToggleSidebar} collapsed={collapse} breakPoint="md" >
          <SidebarHeader>
              <img src={assets.logo1} /> 
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
                {menues.map(menue => {
                    return (
                      <>
                        {menue.childs? (
                          <SubMenu 
                            title={menue.title}
                            icon={menue.icon}
                          >
                            {menue.childs.map(child => {
                              return (
                              <MenuItem 
                                active={window.location.pathname.indexOf(child.path) > -1} 
                                onClick={() => handleClick(child)}  
                              >
                                {child.title}
                              </MenuItem>
                              )
                            })}
                          </SubMenu>
                        ): (
                          <MenuItem 
                              active={window.location.pathname.indexOf(menue.path) > -1} 
                              icon={menue.icon}
                              onClick={() => handleClick(menue)}
                          >
                              {menue.title}
                          </MenuItem>
                        )}
                        
                        
                      </>
                    )
                })}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;