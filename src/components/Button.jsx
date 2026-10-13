export default function Button({ href, variant = 'outline', block, className = '', children, ...rest }) {
  const cls = ['btn', variant === 'solid' && 'btn--solid', variant === 'sm' && 'btn--sm', block && 'btn--block', className]
    .filter(Boolean).join(' ');
  const Tag = href ? 'a' : 'button';
  return <Tag className={cls} href={href} {...rest}>{children}</Tag>;
}
