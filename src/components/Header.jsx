import mmcoeLogo from "../assets/mmcoe-logo.png";
import isteLogo from "../assets/iste-logo.png";

export default function Header() {
  return (
    <header>
      <img src={mmcoeLogo} alt="MMCOE logo" />
      <div className="college">
        Marathwada Mitra Mandal’s College of Engineering
        <small>An Autonomous Institute Affiliated to SPPU · NAAC A++ · NBA</small>
      </div>
      <img src={isteLogo} alt="ISTE logo" />
    </header>
  );
}
