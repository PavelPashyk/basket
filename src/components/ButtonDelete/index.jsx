export const ButtonDelete = ({ propertyDeleteProduct,propertyDeleteProductId }) => {
  return (
    <button type="button" onClick={()=>{propertyDeleteProduct(propertyDeleteProductId)}}>
      <img src="./img/icons/cross.svg" alt="Delete" />
    </button>
  );
};
