import SacramentoServiceLandingPage from '../components/SacramentoServiceLandingPage';
import { sacramentoLandingPages } from '../data/sacramentoLandingPages';

export default function RoofRepairSacramento() {
  return <SacramentoServiceLandingPage config={sacramentoLandingPages['roof-repair-sacramento']} />;
}
