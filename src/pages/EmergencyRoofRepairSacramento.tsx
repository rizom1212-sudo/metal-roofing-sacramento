import SacramentoServiceLandingPage from '../components/SacramentoServiceLandingPage';
import { sacramentoLandingPages } from '../data/sacramentoLandingPages';

export default function EmergencyRoofRepairSacramento() {
  return <SacramentoServiceLandingPage config={sacramentoLandingPages['emergency-roof-repair-sacramento']} />;
}
