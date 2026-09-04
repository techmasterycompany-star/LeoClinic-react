import StaticsOne from "./StaticsOne";
import StaticsTwo from "./StaticsTwo";
import StaticsThree from "./StaticsThree";
import Alerts from "./Alerts";
import Resources from "./Resources";
import Distribution from "./Distribution";
import Chart from "./chart";
import AdminDrProfileSidebar from "./SideBar";
import AdminDrProfileNavbar from "./NavBar"


function AdminAnalyticsDashboard(){
    return(
       <>
      <div className="flex items-start bg-[#F8F9FC] min-h-screen w-full m-0">
        <aside
          className="Sidebar w-[264px] shrink-0
               h-screen 
        flex
        flex-col
        rounded-tl-[32px]
        rounded-bl-[32px]
        bg-[
        linear-gradient(220.76deg,#000A5A_69.16%,#326BE5_80.36%,#7D8DE8_100%)] "
        >
          <AdminDrProfileSidebar />
        </aside>
        <main className=" flex-1  hide-scrollbar  ml-6 mr-6 mb-12">
          <section className="header mb-6"><AdminDrProfileNavbar/></section>
          <section className="mainContent">
            <div className="statics w-full mb-2 flex gap-4 h-[180px]">
              <StaticsOne />
              <StaticsTwo />
              <StaticsThree />
            </div>
            <div className="flex items-center gap-5 mb-6 h-[296px]">
              <Chart />
              <Distribution />
            </div>
            <div className="flex items-center gap-5 h-[255px]">
              <Alerts />
              <Resources />
            </div>
          </section>
        </main>
      </div>
    </>

    );
}
export default AdminAnalyticsDashboard;