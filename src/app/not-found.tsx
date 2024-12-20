import NotFoundComponent from "@/components/NotFoundComponent";

const NotFound = () => {
  return (
    <NotFoundComponent
      title="Product Not Found"
      description="Sorry, we couldn't find the product you're looking for."
      imageUrl="/product-not-found.svg"
      backUrl="/products"
      backText="Back to Products"
    />
  );
};

export default NotFound;
