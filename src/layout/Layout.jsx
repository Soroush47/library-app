import Header from "../components/Header";
import Footer from "../components/Footer";


function Layout({ theme, setTheme, children }) {
    return (
        <>
            <div>
                <Header theme={theme} setTheme={setTheme} />
                {children}
            </div>
            <Footer theme={theme} />
        </>
    );
}

export default Layout;
