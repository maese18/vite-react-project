import { useMemo, useState } from "react";
import { initialItems } from "./utils";

interface UseMemoDemoProps {
  initialCount: number;
}
export default function UseMemoDemo({ initialCount = 0 }: UseMemoDemoProps) {
  const [count, setCount] = useState(initialCount);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div className="tutorial">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
