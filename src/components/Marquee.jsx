// Infinite, seamless horizontal ticker. Pauses on hover.
const Marquee = ({ items }) => {
  const row = (suffix) =>
    items.map((item) => (
      <span className="marquee-item" key={`${item.name}-${suffix}`}>
        <i className={item.icon} aria-hidden="true"></i>
        {item.name}
      </span>
    ))

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{row('a')}</div>
        <div className="marquee-group">{row('b')}</div>
      </div>
    </div>
  )
}

export default Marquee
