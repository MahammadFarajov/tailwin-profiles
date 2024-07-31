import Container from "./Container"
import moment from "moment"
const User = ({user, repos}) => {
  return (
    <Container>
      <div className="flex mt-2 gap-[10px]">
        <div className="w-1/4 border-slate-300 border rounded-md flex flex-col gap-2 p-5">
        <img src={user.avatar_url} alt="" /></div>
        <h1 className="text-3xl font-semibold">{user.name}</h1>
        <p className="font-medium text-slate-400">Created at: {moment(user.created_at).format("MMM Do, YYYY")}</p>
        <div className="flex gap-0.5"><div className="border-[#e7e7e9] rounded-[5px]">{user.followers}</div> Followers</div>
      </div>
      <div className="w-3/4 border-slate-300 border rounded-md p-5">
        <h1 className="text-4xl font-semibold mb-4">Repositories</h1>
        <div className="grid grid-cols-4 gap-3">
          {repos?.map((repo, index) => (
            <a key={index} href={repo.html_url} className="border-zinc-400/20 rounded-md p-2 text-lg font-medium ">{repo.name}</a>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default User