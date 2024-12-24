import AppData from "@data/app.json";

const TopBackgroundModule = () => {
    return (
        <>
            {/* curtain */}
            <div className="art-curtain"></div>

            {/* top background */}
            <div className="art-top-bg" style={{"backgroundImage": "url("+AppData.header.topBackground+")" }}>
              {/* overlay */}
              <div className="art-top-bg-overlay"></div>
              {/* overlay end */}
            </div>
            {/* top background end */}
        </>
    );
};
export default TopBackgroundModule;