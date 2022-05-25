import logo from './logo.svg';
import './App.css';
import { Children } from 'react';
import {HeaderLink} from './components/HeaderLink'
import {Input} from './components/Input'
import {SearchButton} from './components/SearchButton'
import {InputSearch} from './components/InputSearch'
import {MenuHidden} from './components/MenuHidden'
import {ListAtDropdown} from './components/ListAtDropdown'
import {DropdownDivider} from './components/DropdownDivider'
import {DropdownButton} from './components/DropdownButton'
import {DropdownBlock} from './components/DropdownBlock'
import {DropDownMenu} from './components/DropDownMenu'
import {SideNavMenuHeader} from './components/SideNavMenuHeader'
import {DashboardLink} from './components/DashboardLink'
import {LayoutLink} from './components/LayoutLink'
import {TableTitle} from './components/TableTitle'
import {CardBody} from './components/CardBody'
import {Navbar} from './components/Navbar'
import {NavLink} from './components/NavLink'
import {Collapse} from './components/Collapse'
import {CardHeader} from './components/CardHeader'
import {TableHeader} from './components/TableHeader'
import {TableFooter} from './components/TableFooter'
import {ColapdedLink} from './components/ColapdedLink'
import {ColapdedLinkWithIcon} from './components/ColapdedLinkWithIcon'
import {CollapseTwo} from './components/CollapseTwo'
import {ChartsIcon} from './components/ChartsIcon'
import {TableIcon} from './components/TableIcon'
import {Nav} from './components/Nav'
import {SidenavMenu} from './components/SidenavMenu'
import {Card} from './components/Card'
import {Breadcrumb} from './components/Breadcrumb'
import {Table} from './components/Table'
import {TableBody} from './components/TableBody'
import {ContainerFluid} from './components/ContainerFluid'
import {Main} from './components/Main'
import {SidnavFooter} from './components/SidnavFooter'
import {Small} from './components/Small'
import {Link} from './components/Link'
import {BreadcrumbItem} from './components/BreadcrumbItem'
import {BreadcrumbItemActive} from './components/BreadcrumbItemActive'
import {IconTable} from './components/IconTable'
import {SidenavAccordion} from './components/SidenavAccordion'
import {LayoutSidenav} from './components/LayoutSidenav'
import {LayoutSidenavHeader} from './components/LayoutSidenavHeader'
import {LayoutSidenavBody} from './components/LayoutSidnavBody'
import {Body} from './components/Body'
import {CopyRight} from './components/CopyRight'
import {LinkInFooter} from './components/LinkInFooter'
import {Footer} from './components/Footer'
import {Div} from './components/Div'
import {TableRow} from './components/TableRow'
import {TableHeadCell} from './components/TableHeadCell'
import {TableCell} from './components/TableCell'


function App() {
  return(
    <Body>
        <Navbar>
            <HeaderLink logo="Start Bootstrap"/>
            <MenuHidden/>
            <InputSearch>
                <Input type="text" placeholder="Search for..."/>
                <SearchButton/>
            </InputSearch>
            <DropDownMenu>
                <DropdownButton/>
                <DropdownBlock>
                    <ListAtDropdown menu="Settings"/>
                    <ListAtDropdown menu="Activity Log"/>
                    <DropdownDivider/>
                    <ListAtDropdown menu="Logout"/>
                </DropdownBlock>
            </DropDownMenu>
        </Navbar>
 
    <LayoutSidenav>
        <LayoutSidenavHeader>
            <SidenavAccordion>
                <SidenavMenu>
                    <Nav>
                        <SideNavMenuHeader text="Core"/>
                            <DashboardLink text="Dashboard"/>
                        <SideNavMenuHeader text="Interface"/>
                            <LayoutLink text="Layouts"/>
                        <Collapse id="collapseLayouts">
                            <NavLink file="layout-static.html" link="Static Navigation"/>
                            <NavLink file="layout-sidenav-light.html" link="Light Sidenav"/>
                        </Collapse>
                        <ColapdedLinkWithIcon text="Pages"/>
                        <CollapseTwo>
                            <ColapdedLink text="Authentication"/>
                            <Collapse id="pagesCollapseAuth">
                                <NavLink file="login.html" link="Login"/>
                                <NavLink file="register.html" link="Register"/>
                                <NavLink file="password.html" link="Forgot Password"/>
                            </Collapse>
                            <ColapdedLink text="Error"/>
                            <Collapse id="pagesCollapseError" ariaLabelledby="headingOne">
                                <NavLink file="401.html" link="401 Page"/>
                                <NavLink file="404.html" link="404 Page"/>
                                <NavLink file="500.html" link="500 Page"/>
                            </Collapse>
                        </CollapseTwo>
                        <SideNavMenuHeader text="Addons"/>
                        <NavLink file="charts.html" link="Charts">
                            <ChartsIcon/>
                        </NavLink>
                        <NavLink file="tables.html" link="Tables">
                            <TableIcon/>
                        </NavLink>
                    </Nav>
                </SidenavMenu>
                <SidnavFooter>
                    <Small text="Logged in as:"/>
                    Start Bootstrap
                </SidnavFooter>
            </SidenavAccordion>
        </LayoutSidenavHeader>
        
        <LayoutSidenavBody>
            <Main>
                <ContainerFluid>
                    <TableTitle title="Tables"/>
                    <Breadcrumb>
                        <BreadcrumbItem><Link file="index.html" link="Dashboard"/></BreadcrumbItem>
                        <BreadcrumbItemActive>Tables</BreadcrumbItemActive>
                    </Breadcrumb>
                    <Card>
                        <CardBody>
                            DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the 
                            <Link target="_blank" file="https://datatables.net/" link="official DataTables documentation"/>
                            .
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <IconTable/>
                            DataTable Example
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHeadCell elements={["Name","Position","Office","Age","Start date","Salary"]}/>
                                    </TableRow>
                                </TableHeader>
                                <TableFooter>
                                    <TableRow>
                                        <TableHeadCell elements={["Name","Position","Office","Age","Start date","Salary"]}/>
                                    </TableRow>
                                </TableFooter>
                                <TableBody>
                                    <TableRow>
                                        <TableCell elements={["Tiger Nixon","System Architect","Edinburgh","61","2011/04/25","$320,800"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Garrett Winters","Accountant","Tokyo","63","2011/07/25","$170,750"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Ashton Cox","Junior Technical Author","San Francisco","66","2009/01/12","$86,000"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Cedric Kelly","Senior Javascript Developer","Edinburgh","22","2012/03/29","$433,060"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Airi Satou","Accountant","Tokyo","33","2008/11/28","$162,700"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Brielle Williamson","Integration Specialist","New York","61","2012/12/02","$372,000"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Herrod Chandler","Sales Assistant","San Francisco","59","2012/08/06","$137,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Rhona Davidson","Integration Specialist","Tokyo","55","2010/10/14","$327,900"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Colleen Hurst","Javascript Developer","San Francisco","39","2009/09/15","$205,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Sonya Frost","Software Engineer","Edinburgh","23","2008/12/13","$103,600"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jena Gaines","Office Manager","London","30","2008/12/19","$90,560"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Quinn Flynn","Support Lead","Edinburgh","22","2013/03/03","$342,000"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Charde Marshall","Regional Director","San Francisco","36","2008/10/16","$470,600"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Haley Kennedy","Senior Marketing Designer","London","43","2012/12/18","$313,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Tatyana Fitzpatrick","Regional Director","London","19","2010/03/17","$385,750"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Michael Silva","Marketing Designer","London","66","2012/11/27","$198,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Paul Byrd","Chief Financial Officer (CFO)","New York","64","2010/06/09","$725,000"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Gloria Little","Systems Administrator","New York","59","2009/04/10","$237,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Bradley Greer","Software Engineer","London","41","2012/10/13","$132,000"]}/>                                                                            
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Dai Rios","Personnel Lead","Edinburgh","35","2012/09/26","$217,500"]}/>                                         
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jenette Caldwell","Development Lead","New York","30","2011/09/03","$345,000"]}/>                                                                               
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Yuri Berry","Chief Marketing Officer (CMO)","New York","40","2009/06/25","$675,000"]}/>  
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Caesar Vance","Pre-Sales Support","New York","21","2011/12/12","$106,450"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Doris Wilder","Sales Assistant","Sidney","23","2010/09/20","$85,600"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Angelica Ramos","Chief Executive Officer (CEO)","London","47","2009/10/09","$1,200,000"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Gavin Joyce","Developer","Edinburgh","42","2010/12/22","$92,575"]}/> 
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jennifer Chang","Regional Director","Singapore","28","2010/11/14","$357,650"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Brenden Wagner","Software Engineer","San Francisco","28","2011/06/07","$206,850"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Fiona Green","Chief Operating Officer (COO)","San Francisco","48","2010/03/11","$850,000"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Shou Itou","Regional Marketing","Tokyo","20","2011/08/14","$163,000"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Michelle House","Integration Specialist","Sidney","37","2011/06/02","$95,400"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Suki Burks","Developer","London","53","2009/10/22","$114,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Prescott Bartlett","Technical Author","London","27","2011/05/07","$145,000"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Gavin Cortez","Team Leader","San Francisco","22","2008/10/26","$235,500"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Martena Mccray","Post-Sales support","Edinburgh","46","2011/03/09","$324,050"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Unity Butler","Marketing Designer","San Francisco","47","2009/12/09","$85,675"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Howard Hatfield","Office Manager","San Francisco","51","2008/12/16","$164,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Hope Fuentes","Secretary","San Francisco","41","2010/02/12","$109,850"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Vivian Harrell","Financial Controller","San Francisco","62","2009/02/14","$452,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Timothy Mooney","Office Manager","London","37","2008/12/11","$136,200"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jackson Bradshaw","Director","New York","65","2008/09/26","$645,750"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Olivia Liang","Support Engineer","Singapore","64","2011/02/03","$234,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Bruno Nash","Software Engineer","London","38","2011/05/03","$163,500"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Sakura Yamamoto","Support Engineer","Tokyo","37","2009/08/19","$139,575"]}/>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Thor Walton","Developer","New York","61","2013/08/11","$98,540"]}/>                   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Finn Camacho","Support Engineer","San Francisco","47","2009/07/07","$87,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Serge Baldwin","Data Coordinator","Singapore","64","2012/04/09","$138,575"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Zenaida Frank","Software Engineer","New York","63","2010/01/04","$125,250"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Zorita Serrano","Software Engineer","San Francisco","56","2012/06/01","$115,000"]}/>                             
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jennifer Acosta","Junior Javascript Developer","Edinburgh","43","2013/02/01","$75,650"]}/>    
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Cara Stevens","Sales Assistant","New York","46","2011/12/06","$145,600"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Hermione Butler","Regional Director","London","47","2011/03/21","$356,250"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Lael Greer","Systems Administrator","London","21","2009/02/27","$103,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Jonas Alexander","Developer","San Francisco","30","2010/07/14","$86,500"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Shad Decker","Regional Director","Edinburgh","51","2008/11/13","$183,000"]}/>   
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Michael Bruce","Javascript Developer","Singapore","29","2011/06/27","$183,000"]}/>  
                                    </TableRow>
                                    <TableRow>
                                        <TableCell elements={["Donna Snider","Customer Support","New York","27","2011/01/25","$112,000"]}/>                       
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                    </Card>
                </ContainerFluid>
            </Main>
            <Footer>
                <CopyRight text ="Copyright &copy; Your Website 2022"/>
                <Div>
                    <LinkInFooter linktext="Privacy Policy"/>
                    <LinkInFooter linktext="Terms &amp; Conditions"/>
                    &middot;
                </Div>
            </Footer>
        </LayoutSidenavBody>
    </LayoutSidenav>
</Body>
  );
}

export default App;