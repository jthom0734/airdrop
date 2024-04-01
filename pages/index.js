import React, { useContext } from "react";

//INTERNAL IMPORT
import {
  Chart,
  Contribution,
  Document,
  Download,
  Faq,
  Feature,
  FeatureTwo,
  Footer,
  Header,
  Hero,
  Scrollup,
  Loader,
} from "../components/index";
import { CONTEXT } from "../context/index";

const index = () => {
  const { loader } = useContext(CONTEXT);
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Contribution />
        <Feature />
        <FeatureTwo />
        <Chart />
        <Faq />
        <Download />
        <Document />
      </main>
      <Footer />
      {loader && (
        <div className="new_loader">
          <Loader />
        </div>
      )}
      <Scrollup />
    </div><!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/660a670fa0c6737bd126f1db/1hqca5615';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
  );
};

export default index;
