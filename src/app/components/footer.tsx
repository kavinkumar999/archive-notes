function footer() {
  const socialLink = 'https://github.com/kavinkumar999';
  return (
    <div className="dark:border-zinc-800 border-zinc-100 mt-16 lg:min-h-[100px] min-h-full relative">
      <div className="py-8 px-16 flex justify-end">
        <a href={socialLink} target="_blank" className="text-gray-500 text-right">@kavin</a>
      </div>
    </div>
  )
}

export default footer