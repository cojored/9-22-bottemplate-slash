import { CommandInteraction } from "discord.js";

export default {
  name: "test",
  description: "Test Command",
  async execute(interaction: CommandInteraction) {
    interaction.reply("Hello World");
  },
};
