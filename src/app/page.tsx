import { createClient } from "./utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: tasks } = await supabase.from("tasks").select();
  //console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Hello world!!!</div>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>
            <h3>{task.content}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
