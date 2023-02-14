export default interface IGuild {
  id: string;
  guildCreatedAt: Date;
  createdAt: Date;
  name?: string;
  icon?: string;
  owner?: boolean;
}
