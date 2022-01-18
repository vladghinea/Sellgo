using Microsoft.EntityFrameworkCore.Migrations;

namespace El_Proyecte_Grande.Migrations
{
    public partial class UpdateDeal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deals_AspNetUsers_UserId1",
                table: "Deals");

            migrationBuilder.DropIndex(
                name: "IX_Deals_UserId1",
                table: "Deals");

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Deals");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Deals",
                type: "nvarchar(450)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateIndex(
                name: "IX_Deals_UserId",
                table: "Deals",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Deals_AspNetUsers_UserId",
                table: "Deals",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Deals_AspNetUsers_UserId",
                table: "Deals");

            migrationBuilder.DropIndex(
                name: "IX_Deals_UserId",
                table: "Deals");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Deals",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Deals",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Deals_UserId1",
                table: "Deals",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Deals_AspNetUsers_UserId1",
                table: "Deals",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
