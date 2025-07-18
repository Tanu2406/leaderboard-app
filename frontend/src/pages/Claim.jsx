import ClaimForm from "../components/ClaimForm";

const Claim = () => (
  <div className="lg:pl-96">
  <div className=" bg-blue-50  border border-blue-500 rounded-2xl lg:pl-60 lg:pr-60 pt-50 pb-50 pr-10 pl-10 ml-3">
    
    <h1 className="text-xl lg:text-2xl  font-bold mb-4">Claim Points</h1>
    <ClaimForm />
  </div>
  </div>
);

export default Claim;
