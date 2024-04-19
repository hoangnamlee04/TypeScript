import { Product } from "@/interfaces/Product";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useParams } from "react-router-dom";
import instance from "@/services";

type Props = {
  onSubmit: (product: Product) => void;
};

const productSchema = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().required(),
});

const EditProduct = ({ onSubmit }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/products/${id}`);
      setProduct(data);
    })();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({
    resolver: joiResolver(productSchema),
  });
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Edit product</h1>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input
            className="form-control"
            type="text"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 100,
            })}
            defaultValue={product?.title}
          />
          {errors.title && (
            <div className="text-danger">{errors.title.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            className="form-control"
            type="number"
            {...register("price", {
              required: true,
              min: 0,
            })}
            defaultValue={product?.price}
          />
          {errors.price && (
            <div className="text-danger">{errors.price.message}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="">Description</label>
          <input
            className="form-control"
            type="text"
            {...register("description", {
              required: true,
            })}
            defaultValue={product?.description}
          />
          {errors.description && (
            <div className="text-danger">{errors.description.message}</div>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default EditProduct;
