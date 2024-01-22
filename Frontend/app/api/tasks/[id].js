
import { getOneTask, updateTask, deleteTask } from '../../../controller/taskController';

export default async function handler(req, res) {
  const taskId = req.query.id;

  switch (req.method) {
    case 'GET':
      try {
        const task = await getOneTask(req, res);
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'PUT':
      try {
        const result = await updateTask(taskId, req, res);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    case 'DELETE':
      try {
        const result = await deleteTask(taskId, req, res);
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
      break;

    default:
      res.status(405).json({ error: 'Method Not Allowed' });
  }
}
