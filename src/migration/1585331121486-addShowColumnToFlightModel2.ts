import {MigrationInterface, QueryRunner} from "typeorm";

export class addShowColumnToFlightModel21585331121486 implements MigrationInterface {
    name = 'addShowColumnToFlightModel21585331121486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" ADD "show" boolean`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flight" DROP COLUMN "show"`, undefined);
    }

}
