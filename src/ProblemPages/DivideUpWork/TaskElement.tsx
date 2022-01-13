import React, {
  FC,
  useEffect,
  useRef,
  useState
  } from 'react'
import { Task } from '../../problem-algorithms/divideUpWork'

interface Props {
  handleUpdate: (idx: number, newValue: Partial<Task>) => void;
  handleToggleCheck: (idx: number) => void;
  idx: number;
  task: Task;
  checked: boolean;
}

export const TaskElement: FC<Props> = ({
  handleUpdate,
  handleToggleCheck,
  idx,
  task,
  checked,
}) => {
  const HTMLtask = useRef<HTMLTableRowElement | null>(null);

  return (
    <tr className="" ref={HTMLtask}>
      <td>
        <input
          type="checkbox"
          name="check"
          checked={checked}
          onChange={(e) => {
            handleToggleCheck(idx);
          }}
        />
      </td>
      <td>
        <input
          type="text"
          name="desc"
          value={task.desc}
          onChange={(e) => handleUpdate(idx, { desc: e.target.value })}
        />
      </td>
      <td>
        <select
          value={task.weight}
          onChange={(e) =>
            handleUpdate(idx, { weight: Number(e.target.value) })
          }
          name="weight"
        >
          <option value="1">small</option>
          <option value="2">medium</option>
          <option value="3">big</option>
        </select>
      </td>
    </tr>
  );
};
