import SacramentoServiceLandingPage from '../components/SacramentoServiceLandingPage';
import { sacramentoLandingPages } from '../data/sacramentoLandingPages';

export default function RoofInspectionSacramento() {
  return <SacramentoServiceLandingPage config={sacramentoLandingPages['roof-inspection-sacramento']} />;
}
