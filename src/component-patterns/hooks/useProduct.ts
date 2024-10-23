import { useState, useEffect, useRef } from "react"
import { InitialValues, OnChangeArgs, Product } from "../interfaces/productInterfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProductArgs) => {
  const [counter, setCounter] = useState(initialValues?.count || value);

  const isMounted = useRef(false);

  const maxCount = initialValues?.maxCount;

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0) && Math.min(counter + value, 10);
    setCounter(newValue)
    onChange && onChange({count: newValue, product});
  }

  const reset = () => setCounter(initialValues?.count || value)
  useEffect(() => {
    isMounted.current = true;
  }, [])
  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value])

  return {
    counter,
    increaseBy,
    reset,
    maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter
  }
}